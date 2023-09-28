import React from 'react';

import img from './img/tasks.png';

const Banner = () => {
    return (
        <div className="rounded shadow p-5 mt-5 d-flex mb-5" >
            <img src={img} alt="" width="250" className="me-5"/>
            <div>
                <h3 className="text-primary">Bienvenido a Tareas</h3>
                <h5 className="text-secondary">
                    En esta aplicacion podras consultar, crear, actualizar y eliminar tus tareas.
                </h5>

                <hr />

                <p className="text-muted">
                    Esta aplicacion fue desarrollada con Spring Boot, ReactJS y Mongo DB.
                </p>
            </div>
        </div>
    );
}

export default Banner;