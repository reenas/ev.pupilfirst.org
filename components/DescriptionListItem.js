export default function DescriptionListItem({ title, content, children }) {
	return (
		<div>
			<h3 className="heading-with-underscore text-xl lg:text-2xl text-primary-500 font-semibold">
				{title}
			</h3>
			<p className="pt-1 text-sm lg:text-lg ">{content}</p>
			{children && <div className="pt-1 text-sm lg:text-lg">{children}</div>}
		</div>
	);
}
