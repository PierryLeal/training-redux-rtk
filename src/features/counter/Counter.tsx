import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { decrease, getValue, increase } from "../../slice/counterSlice"

const Counter = () => {
  const dispatch = useAppDispatch()
  const value = useAppSelector(getValue)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>{value}</span>
      <span style={{ display: "flex", gap: "1rem" }}>
        <button
          style={{ display: "flex", width: "5rem" }}
          onClick={() => dispatch(decrease())}
        >
          Decrease
        </button>
        <button
          style={{ display: "flex", width: "5rem" }}
          onClick={() => dispatch(increase())}
        >
          Increase
        </button>
      </span>
    </div>
  )
}

export default Counter
