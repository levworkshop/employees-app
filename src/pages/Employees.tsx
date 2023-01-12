import { useEffect } from "react";
import { Link } from "react-router-dom";

function Employees() {
    useEffect(() => {
        fetch('http://localhost/employees-app/api/get_employees.php')
            .then(res => res.json())
            .then(json => {
                console.log(json);
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
                        <th>Employee Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </>
    );
}

export default Employees;