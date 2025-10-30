import React, { useEffect, useState } from 'react';
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    Timestamp
} from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';
import './CRUD.css';

export default function CRUD() {
    const [noticias, setNoticias] = useState([]);
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [confirm, setConfirm] = useState(true);
    const [active, setActive] = useState('noticias'); // 'noticias' | 'eventos'

    const [form, setForm] = useState({ titulo: '', contenido: '', fecha: '' });
    const [editing, setEditing] = useState(null); // {id, collection}

    useEffect(() => {
        fetchAll();
    }, []);

    async function fetchAll() {
        setLoading(true);
        // Noticias
        const noticiasCol = collection(db, 'noticias');
        const noticiasSnapshot = await getDocs(noticiasCol);
        const noticiasList = noticiasSnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        setNoticias(noticiasList);

        // Eventos
        const eventosCol = collection(db, 'eventos');
        const eventosSnapshot = await getDocs(eventosCol);
        const eventosList = eventosSnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        setEventos(eventosList);

        setLoading(false);
    }

    const clearForm = () => setForm({ titulo: '', contenido: '', fecha: '' });

    function prettyDateForInput(value) {
        if (!value) return '';
        // value may be Firestore Timestamp or string
        let d;
        if (typeof value === 'object' && typeof value.toDate === 'function') {
            d = value.toDate();
        } else if (typeof value === 'string') {
            d = new Date(value);
        } else if (value instanceof Date) {
            d = value;
        } else {
            return '';
        }
        // yyyy-mm-dd
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    }

    function displayDate(value) {
        if (!value) return '';
        if (typeof value === 'object' && typeof value.toDate === 'function') {
            return value.toDate().toLocaleDateString('es-ES');
        }
        if (typeof value === 'string') {
            const d = new Date(value);
            return isNaN(d.getTime()) ? value : d.toLocaleDateString('es-ES');
        }
        if (value instanceof Date) return value.toLocaleDateString('es-ES');
        return String(value);
    }

    async function handleCreateOrUpdate(e) {
        e.preventDefault();
        const payload = {
            titulo: form.titulo,
            contenido: form.contenido,
            fecha: form.fecha ? Timestamp.fromDate(new Date(form.fecha)) : null
        };

        try {
            if (editing) {
                const ref = doc(db, editing.collection, editing.id);
                await updateDoc(ref, payload);
            } else {
                const ref = collection(db, active);
                await addDoc(ref, payload);
            }
            await fetchAll();
            clearForm();
            setEditing(null);
        } catch (err) {
            console.error('Error creando/actualizando:', err);
            alert('Ocurrió un error. Revisa la consola.');
        }
    }

    async function handleDelete(id, collectionName) {
        if (!confirm('¿Eliminar este elemento?')) return;
        try {
            const ref = doc(db, collectionName, id);
            await deleteDoc(ref);
            await fetchAll();
        } catch (err) {
            console.error('Error al eliminar:', err);
            alert('Ocurrió un error al eliminar.');
        }
    }

    function startEdit(item, collectionName) {
        setEditing({ id: item.id, collection: collectionName });
        setForm({
            titulo: item.titulo || '',
            contenido: item.contenido || '',
            fecha: prettyDateForInput(item.fecha) || ''
        });
        setActive(collectionName);
    }

    function startCreate(collectionName) {
        setEditing(null);
        clearForm();
        setActive(collectionName);
    }

    const items = active === 'noticias' ? noticias : eventos;

    return (
        <div className="crud-panel">
            <h2>Panel Admin (CRUD)</h2>
            <div className="crud-tabs">
                <button onClick={() => setActive('noticias')} disabled={active === 'noticias'}>Noticias</button>
                <button onClick={() => setActive('eventos')} disabled={active === 'eventos'}>Eventos</button>
                <button onClick={() => startCreate(active)} style={{ marginLeft: 16 }}>Crear nuevo {active}</button>
            </div>

            <form className="crud-form" onSubmit={handleCreateOrUpdate}>
                <h3>{editing ? 'Editar' : 'Crear'} {active}</h3>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 250px' }}>
                        <label>Título</label>
                        <input value={form.titulo} onChange={e => setForm(f => ({ ...f, titulo: e.target.value }))} required />
                    </div>
                    <div style={{ flex: '1 1 200px' }}>
                        <label>Fecha</label>
                        <input type="date" value={form.fecha} onChange={e => setForm(f => ({ ...f, fecha: e.target.value }))} />
                    </div>
                    <div style={{ flex: '1 1 100%' }}>
                        <label>Contenido</label>
                        <textarea value={form.contenido} onChange={e => setForm(f => ({ ...f, contenido: e.target.value }))} rows={3} />
                    </div>
                </div>
                <div style={{ marginTop: 8 }}>
                    <button type="submit">{editing ? 'Guardar' : 'Crear'}</button>
                    {editing && <button type="button" onClick={() => { setEditing(null); clearForm(); }} style={{ marginLeft: 8 }}>Cancelar</button>}
                </div>
            </form>

            {loading ? (
                <p>Cargando...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.titulo}</td>
                                <td>{displayDate(item.fecha)}</td>
                                <td>
                                    <button onClick={() => startEdit(item, active)}>Editar</button>
                                    <button onClick={() => handleDelete(item.id, active)} style={{ marginLeft: 8 }}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                        {items.length === 0 && (
                            <tr>
                                <td colSpan={3}>No hay elementos en {active}.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
}