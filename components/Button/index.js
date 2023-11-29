
export default function index(props) {
  return (
    <button className={`${props.className} bg-primary-color`}>
        {props.children}
    </button>
  )
}
