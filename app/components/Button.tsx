
export default function Button(props: any) {
    return (
        <button className="font-semibold">
            {props.children}
        </button>
    )
}