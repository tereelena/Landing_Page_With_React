import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import ChinaImage from "../../img/arrozlawwok.jpg";
import pizzaImage from "../../img/pizza.jpg";
import wontonImage from "../../img/Wonton.jpg";

export function Tarjeta() {
	return (
		<div className="card-group">
			<div className="row">
				<div className="col-4">
					<div className="card text-center">
						<img
							src={wontonImage}
							className="car-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title text-center">
								Card title
							</h5>
							<p className="card-text">
								simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the
								industrys standard dummy text ever since the
								1500s, when an unknown printer took a galley of
								type and scrambled it to make a type specimen
								book.
							</p>

							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card text-center">
						<img
							src={wontonImage}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the
								industrys standard dummy text ever since the
								1500s, when an unknown printer took a galley of
								type and scrambled it to make a type specimen
								book.
							</p>

							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
				<div className="col-4">
					<div className="card text-center">
						<img
							src={wontonImage}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the
								industrys standard dummy text ever since the
								1500s, when an unknown printer took a galley of
								type and scrambled it to make a type specimen
								book.
							</p>

							<a href="#" className="btn btn-primary">
								Find Out More!
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
