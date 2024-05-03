"use client";
import React, { useState } from 'react';

const PlanForm = () => {
    const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario

    const toggleForm = () => {
        setShowForm(!showForm); // Cambiar el estado al contrario del estado actual
    };

    const [rangeValue1, setRangeValue1] = useState(1);
    const [rangeValue2, setRangeValue2] = useState(1);

    const handleRangeChange1 = (event) => {
        setRangeValue1(event.target.value);
    };

    const handleRangeChange2 = (event) => {
        setRangeValue2(event.target.value);
    };

    return (
        <div className="container mx-auto py-[50px]">
            <div className='px-[15px] sm:px-[0px]'>
                {!showForm && (
                    <div className='mb-5 flex justify-center'>
                        <button
                            className='px-[15px] py-[10px] bg-[#006d6a] hover:bg-[#005351] font-bold rounded-[10px]'
                            onClick={toggleForm}>
                            Personaliza tu paquete
                        </button>
                    </div>
                )}
                {showForm && (
                    <div className="text-white px-[15px]  w-full sm:w-[60%] lg:w-[40%] mx-auto py-[25px] px-[25px] rounded-[15px]" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                        <button
                            className="absolute top-0 right-0 m-4 text-white" onClick={toggleForm}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                            </svg>
                        </button>
                        <form action="https://formsubmit.co/Facturacionlalaween@gmail.com" method="POST">
                            {/* ¿Cuentas con redes sociales para tu marca? */}
                            <div className="mt-3">
                                <label>
                                    <p>
                                        ¿Cuentas con redes sociales para tu marca?
                                    </p>
                                    <select
                                        name="¿Cuentas con redes sociales para tu marca?"
                                        size="1"
                                        className="w-full font-black text-black typing mt-2">
                                        <option value="No, deseo que me apoyen en crearlas">
                                            No, deseo que me apoyen en crearlas
                                        </option>
                                        <option value="Si, solo una">
                                            Si, solo una
                                        </option>
                                        <option value="Si, cuento con dos redes sociales">
                                            Si, cuento con dos redes sociales
                                        </option>
                                        <option value="Otra, escribe cuantas y cuales plataformas sociales manejas">
                                            Otra, escribe cuantas y cuales plataformas sociales manejas
                                        </option>
                                    </select>
                                </label>
                            </div>
                            {/* ¿Cuentas con redes sociales para tu marca? */}
                            {/* Seleccione los lenguajes que conoce */}
                            <div className="mt-3">
                                <p>
                                    ¿Que tipo de contenido deseas publicar?
                                </p>
                                <div>
                                    <label
                                        name="Que tipo de contenido">
                                        <input type="checkbox" name="Tipo de contenido - Imagen individual" />
                                        Imagen individual
                                        <br />
                                        <input type="checkbox" name="Tipo de contenido - Imagenes estilo carrusel" />
                                        Imagenes estilo carrusel
                                        <br />
                                        <input type="checkbox" name="Tipo de contenido - Stories" />
                                        Stories
                                        <br />
                                        <input type="checkbox" name="Tipo de contenido - Reels" />
                                        Reels
                                    </label>
                                </div>
                            </div>
                            {/* Seleccione los lenguajes que conoce */}
                            {/* Rango del 1 al 20 */}
                            <div className="mt-3">
                                <label>
                                    ¿Cuantas veces deseas publicar a la semana?
                                    <input
                                        className="w-[80%] font-black text-black typing mt-2"
                                        type="range"
                                        name="Cuantas veces deseas publicar a la semana"
                                        min="1"
                                        max="20"
                                        value={rangeValue1}
                                        onChange={handleRangeChange1}
                                        required
                                    />
                                    <input
                                        className="w-[15%] font-black text-black typing ml-2"
                                        type="number"
                                        min="1"
                                        max="20"
                                        value={rangeValue1}
                                        onChange={handleRangeChange1}
                                        required
                                    />
                                </label>
                            </div>
                            {/* Rango del 1 al 20 */}
                            {/* ¿Deseas crear campañas publicitarias, realizadas estratégicamente con el análisis obtenido? */}
                            <div className="mt-3">
                                <p>
                                    ¿Deseas crear campañas publicitarias, realizadas estratégicamente con el análisis obtenido?
                                </p>
                                <div>
                                    <label>
                                        <input type="radio" name="campaña" value="si" />
                                        Sí
                                    </label>
                                    <br />
                                    <label>
                                        <input type="radio" name="campaña" value="no" />
                                        No
                                    </label>
                                </div>
                            </div>
                            {/* ¿Deseas crear campañas publicitarias, realizadas estratégicamente con el análisis obtenido? */}
                            {/* Rango del 1 al 10 */}
                            <div className="mt-3">
                                <label>
                                    ¿Cuantas campañas al mes te gustaría que realicemos?
                                    <input
                                        className="w-[80%] font-black text-black typing mt-2"
                                        type="range"
                                        name="Cuantas campañas al mes te gustaría que realicemos"
                                        min="1"
                                        max="10"
                                        value={rangeValue2}
                                        onChange={handleRangeChange2}
                                        required
                                    />
                                    <input
                                        className="w-[15%] font-black text-black typing ml-2"
                                        type="number"
                                        min="1"
                                        max="10"
                                        value={rangeValue2}
                                        onChange={handleRangeChange2}
                                        required
                                    />
                                </label>
                            </div>
                            {/* Rango del 1 al 10 */}
                            {/* Correo Electronico */}
                            <div className="mt-3">
                                <label>
                                    Correo Electrónico
                                    <input className="w-full font-black text-black typing" type="text" name="Correo Electrónico" required />
                                </label>
                            </div>
                            {/* Correo Electronico */}
                            <div className='mt-5 flex justify-center'>
                                <button className='bg-[#066a69] hover:bg-[#01a09a] px-[45px] py-[10px] font-black rounded-[15px]' type='submit'>Enviar</button>
                            </div>
                            <p className='mt-3'>
                                Para una atención más personalizada, y si ya tienes redes sociales de tu marca compartenos los enlaces para brindarte una plan más personalizado
                                basandonos en lo que requieres y lo que tu marca necesita.
                                <br />
                                Escribe tu dirección de correo o número de whats'app y en breve te envíaremos tu cotización.
                            </p>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlanForm;
