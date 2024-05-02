"use client";
import React, { useState } from 'react';

const PlanForm = () => {
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
                <div className="text-white px-[15px]  w-full sm:w-[60%] lg:w-[40%] mx-auto py-[25px] px-[25px] rounded-[15px]" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlanForm;
