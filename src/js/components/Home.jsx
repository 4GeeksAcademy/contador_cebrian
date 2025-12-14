import React from "react";

//include images into your bundle



//create your first component
const Home = ({ count }) => {
	const inicialCount = parseInt(count);
	const centenasMillar = Math.floor(inicialCount/100000)%10;
	const decenasMillar = Math.floor(inicialCount/10000)%10;
	const millares = Math.floor(inicialCount/1000)%10;
	const centenas = Math.floor(inicialCount/ 100)%10;
	const decenas = Math.floor ( inicialCount / 10)%10;
	const unidades = inicialCount % 10;


	return (
		
		<div className="text-center">
			<h1 className="text-center mt-5 ">{count}</h1>
			<div className=" contador d-flex border">
				
				<div className="digito icono-reloj">
                    <i className="far fa-clock fa-spin"></i> 
                </div>
				
				<div className="Digito d-flex">
					{centenasMillar}

				</div>
				<div className="Digito d-flex">
					{decenasMillar}

				</div>
				<div className="Digito d-flex">
					{millares}

				</div>
				<div className="Digito d-flex">
					{centenas}

				</div>
				<div className="Digito d-flex">
					{decenas}

				</div>
				<div className="Digito d-flex">
					{unidades}

				</div>

					
				

			</div>

		</div>
	);
};

export default Home;