const UserRow = ({ user, allOptions, onToggleActive, onEdit, onDelete, onChangeAdmin }) => {
    return (
      <tr>
        <td>{user.user_id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>
          <select
            value={user.is_admin}
            onChange={(e) => onChangeAdmin(user.user_id, e.target.value)}
          >
            {allOptions.map(option => (
              <option key={option.key} value={option.key}>
                {option.value}
              </option>
            ))}
          </select>
        </td>
        <td>
          <button 
            onClick={() => onToggleActive(user.user_id, user.is_active )} 
            className="toggle-active-btn"
            style={{
                backgroundColor: user.is_active ? 'green' : 'red', // Cambia el color de fondo según el estado
                color: 'white', // Color del texto blanco para contraste
                padding: '5px 10px', // Espaciado interno
                border: 'none', // Sin borde
                borderRadius: '5px', // Bordes redondeados
                cursor: 'pointer', // Cursor de mano al pasar por encima
              }}
          >
            {user.is_active ? 'Enabled' : 'Disabled'}
          </button>
        </td>
        {/* <td>
          <button onClick={() => onEdit(user.user_id)} className="edit-btn">Editar</button>
          <button onClick={() => onDelete(user.user_id)} className="delete-btn">Eliminar</button>
        </td> */}
      </tr>
    );
  };

  export default UserRow;