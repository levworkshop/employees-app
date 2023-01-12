import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IEmployee } from "./types";

function Employees() {
    const [employees, setEmployees] = useState<Array<IEmployee>>([]);

    useEffect(() => {
        fetch('http://localhost/employees-app/api/get_employees.php')
            .then(res => res.json())
            .then(json => {
                setEmployees(json);
            })
    }, []);

    return (
        <>
            <div className="bg-dark p-3">
                <Link
                    to="/details"
                    className="btn btn-primary"
                >
                    Add Employee
                </Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.address}, {employee.cityId}</td>
                            <td>{employee.active}</td>
                            <td>
                                <button
                                    className="btn btn-default"
                                >
                                    <i className="bi-trash" />
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default Employees;