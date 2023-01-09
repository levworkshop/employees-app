import { useEffect } from "react";

function Employees() {
    useEffect(() => {
        fetch('http://localhost/employees-app/api/get_employees.php')
            .then(res => res.json())
            .then(json => {
                console.log(json);

            })
    }, []);

    return (
        <>Employees page</>
    );
}

export default Employees;