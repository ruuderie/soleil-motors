import "./brand-item.styles.scss";

const BrandItem = ({ brand }) => {
	const { name, id, img } = brand;
	return (
		<div className="brand-container" key={id}>
			<div
				className='background-image'
				style={{ backgroundImage: `url('${img}')` }}
			>
				<div className="brand-body-container container">
					<h2>{name}</h2>
					<p>Shop Now</p>
				</div>
			</div>
		</div>
	);
};

export default BrandItem;
