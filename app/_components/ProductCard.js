import Link from "next/link";

const ProductCard = (props) => {

    return (
        <Link href={`/product/${props.id}`} className="group h-[360px] w-[49%] lg:w-[31.13%] bg-red-50 relative">
            <img
                alt={`${props.name}`}
                className="text-black w-full h-full object-cover group-hover:blur-[1px] transition-all"
                src={props.src}
            />
            <div className="absolute bottom-0 h-[40%] w-full p-4 bg-black/40 flex flex-col justify-between">
                <h3 className="text-2xl font-light uppercase">{props.name}</h3>
                <h4 className="text-2xl ">{new Intl.NumberFormat("ru-RU", { maximumSignificantDigits: 3 }).format(props.price)} ₽</h4>
            </div>
        </Link>
    )
}
export default ProductCard;