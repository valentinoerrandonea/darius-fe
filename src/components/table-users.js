import React, { useState, useEffect, useCallback } from 'react';
import './table-users.css';
import UserRow from './UserRow'

const API = process.env.REACT_APP_API;



const TableUsers = ({ users, getUsers}) => {
  const [filter, setFilter] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(5);

  const sortTable = useCallback(() => {
    const table = document.getElementById('adminTable');
    const rows = Array.from(table.rows).slice(1); // Exclude header row

    rows.sort((a, b) => {
      const cellA = a.cells[filter].innerText.toLowerCase();
      const cellB = b.cells[filter].innerText.toLowerCase();

      if (cellA < cellB) return -1;
      if (cellA > cellB) return 1;
      return 0;
    });

    rows.forEach((row) => {
      table.appendChild(row);
    });
  }, [filter]);

  const changeRecordsPerPage = useCallback(() => {
    const table = document.getElementById('adminTable');
    const rows = Array.from(table.rows).slice(1); // Exclude header row

    rows.forEach((row, index) => {
      row.style.display = index < recordsPerPage ? '' : 'none';
    });
  }, [recordsPerPage]);

  useEffect(() => {
    changeRecordsPerPage();
  }, [recordsPerPage, users, changeRecordsPerPage]);

  useEffect(() => {
    sortTable();
  }, [filter, sortTable]);

  const allOptions = [
    { key: 2, value: "Admin" },
    { key: 3, value: "Reporter" },
    { key: 4, value: "Reader" },
  ];

  const handleToggleActive = async (userId, isActive) => {
    console.log("Toggle active for user:", userId);
  
    const newStatus = !isActive; // Alterna el estado
  
    try {
      const response = await fetch(`${API}/profile/toggle_active_status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId, is_active: newStatus }),
      });
  
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Something went wrong with the request');
      }
  
      const data = await response.json();
      console.log("User status updated:", data);
  
      // Actualiza la lista de usuarios
      getUsers();
    } catch (error) {
      console.error('Error:', error);
      // Puedes usar un estado o componente para mostrar el mensaje de error
      // setError(error.message); o displayError(error.message);
    }
  };

  const handleEdit = (userId) => {
    // Aquí va la lógica para editar un usuario
    console.log("Edit user:", userId);
  };

  const handleDelete = async (userId) => {
    // Aquí va la lógica para eliminar un usuario
    console.log("Delete user:", userId);
    // Actualiza el estado después de la operación
    getUsers();
  };


  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChangeAdmin = async (userId, adminValue) => {
    setIsLoading(true);
    setError(null);
  
    try {
      const response = await fetch(`${API}/profile/save_selection_admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId, selection: adminValue }),
      });
  
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Something went wrong with the request');
      }
  
      const data = await response.json();
      console.log("Admin change response:", data);
  
      // Actualizar la lista de usuarios
      getUsers();
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      <div className="filter">
        <div>
          <label htmlFor="filter">Filter By:</label>
          <select id="filter" onChange={(e) => setFilter(parseInt(e.target.value, 10))}>
            <option value="0">Name</option>
            <option value="1">Last Name</option>
          </select>
        </div>
        <div>
          <label htmlFor="records">Records per page:</label>
          <select id="records" onChange={(e) => setRecordsPerPage(parseInt(e.target.value, 10))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>

      <table id="adminTable">
        <thead>
          <tr>
            <th>#Id</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map(user => (
            <tr key={user.user_id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.is_admin ? 'Admin' : 'User'}</td>
              <td>{user.is_active ? 'Active' : 'Inactive'}</td>
            </tr>
          ))} */}
          {users.map(user => (
              <UserRow
                key={user.user_id}
                user={user}
                allOptions={allOptions}
                onToggleActive={handleToggleActive}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onChangeAdmin={handleChangeAdmin}
                disabled={isLoading}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;


{/* <style>
                      @import url('https://fonts.googleapis.com/css2?family=General+Sans:wght@400;700&display=swap');

                      body {
                          font-family: 'General Sans', sans-serif;
                          background-color: #000000;
                          margin: 0;
                          // padding: 20px;
                          color: #f7f7f9;
                      }

                      h1 {
                          text-align: left;
                          color: #CF2A30;
                          font-weight: bold;
                          font-size: 24px;
                          margin-bottom: 20px;
                      }

                      table {
                          width: 100%;
                          border-collapse: collapse;
                          margin-top: 20px;
                      }

                      th, td {
                          padding: 10px;
                          text-align: left;
                          border: 2px solid #CF2A30;
                          color: #f7f7f9;
                      }

                      th {
                          background-color: #CF2A30;
                          color: #f7f7f9;
                          font-weight: bold;
                      }

                      td {
                          background-color: #000000;
                      }

                      .filter {
                          display: flex;
                          justify-content: space-between;
                          margin-bottom: 10px;
                      }

                      .filter select {
                          padding: 5px;
                          font-size: 16px;
                          background-color: #000000;
                          color: #f7f7f9;
                          border: 2px solid #CF2A30;
                      }

                      label {
                          color: #f7f7f9;
                          font-weight: bold;
                      }
                    </style>

<h1>Admin Panel</h1>

                    <div class="filter">
                        <div>
                            <label for="filter">Filter By:</label>
                            <select id="filter" onchange="sortTable()">
                                <option value="0">Name</option>
                                <option value="1">Last Name</option>
                            </select>
                        </div>
                        <div>
                            <label for="records">Records per page:</label>
                            <select id="records" onchange="changeRecordsPerPage()">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                    </div>

                    <table id="adminTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Permissions</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Valentino</td>
                                <td>Errandonea</td>
                                <td>valentino@landtail.net</td>
                                <td>12345</td>
                                <td>Admin</td>
                                <td>Reestablish</td>
                            </tr>
                            <tr>
                                <td>Franco</td>
                                <td>Ponce</td>
                                <td>franco@landtail.net</td>
                                <td>12345</td>
                                <td>Reporter</td>
                                <td>Reestablish</td>
                            </tr>
                            <tr>
                                <td>Martin</td>
                                <td>Errandonea</td>
                                <td>martin@landtail.net</td>
                                <td>12345</td>
                                <td>Admin</td>
                                <td>Reestablish</td>
                            </tr>
                            <tr>
                                <td>Ivan</td>
                                <td>Frecia</td>
                                <td>ivan@landtail.net</td>
                                <td>12345</td>
                                <td>Reader</td>
                                <td>Reestablish</td>
                            </tr>
                            <tr>
                                <td>Tomas</td>
                                <td>Huertas</td>
                                <td>tomas@landtail.net</td>
                                <td>12345</td>
                                <td>Reader</td>
                                <td>Reestablish</td>
                            </tr>
                        </tbody>
                    </table>

                    <script>
                        function sortTable() {
                            var table = document.getElementById("adminTable");
                            var rows = Array.from(table.rows).slice(1); // Exclude header row
                            var selectedIndex = document.getElementById("filter").selectedIndex;

                            rows.sort(function(a, b) {
                                var cellA = a.cells[selectedIndex].innerText.toLowerCase();
                                var cellB = b.cells[selectedIndex].innerText.toLowerCase();

                                if (cellA < cellB) {
                                    return -1;
                                }
                                if (cellA > cellB) {
                                    return 1;
                                }
                                return 0;
                            });

                            rows.forEach(function(row) {
                                table.appendChild(row);
                            });
                        }

                        function changeRecordsPerPage() {
                            var table = document.getElementById("adminTable");
                            var rows = Array.from(table.rows).slice(1); // Exclude header row
                            var recordsPerPage = parseInt(document.getElementById("records").value);
                            
                            rows.forEach(function(row, index) {
                                row.style.display = (index < recordsPerPage) ? "" : "none";
                            });
                        }

                        // Set initial records per page
                        changeRecordsPerPage();
                    </script> */}