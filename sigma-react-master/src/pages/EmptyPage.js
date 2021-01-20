import { Component, useEffect, useState } from "react";
import { UserService } from "../service/UserService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from 'primereact/button';


export const EmptyPage = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const userService = new UserService();
        userService.getAll().then((data) => setUsers(data));
    }, []);

    return (
        <div>
        <div className="card">
          <DataTable value={users}
                    paginator rows={5}
                    header="Header" footer="Footer" className="p-datatable-gridlines" style={{margin: '0 auto', marginTop: '20px'}}>
            <Column field="id" header="ID"></Column>
            <Column field="firstName" header="Nombres"></Column>
            <Column field="lastName" header="Apellidos"></Column>
          </DataTable>
        </div>
      </div>
    );
}
