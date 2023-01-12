import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ICity {
    id: string;
    name: string;
}

function Details() {
    const [cities, setCities] = useState<Array<ICity>>([]);

    useEffect(() => {
        fetch('http://localhost/employees-app/api/get_cities.php')
            .then(res => res.json())
            .then(json => {
                setCities(json);
            })
    }, []);

    return (
        <div className="p-4">
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <select
                    className="form-select"
                >
                    {cities.map(city =>
                        <option
                            key={city.id}
                            value={city.id}>
                            {city.name}
                        </option>
                    )}
                </select>
            </div>
            <div className="form-check mt-2">
                <input
                    type="checkbox"
                    className="checkbox"
                />
                <label className="form-check-label">
                    Active
                </label>
            </div>

            <div className="mt-3">
                <button className="btn btn-primary me-3">
                    Submit
                </button>
                <Link
                    to="/"
                    className="btn btn-secondary"
                >
                    Cancel
                </Link>
            </div>
        </div>
    );
}

export default Details;