import { RecoilRoot, useRecoilValue } from "recoil"
import "../App.css"
import { nameState } from "../state/state"

export function Cards() {

    const name = useRecoilValue(nameState);

    return (
        <RecoilRoot>
            <div className="wishes-section">
                <h2>Birthday Wishes for {name}</h2>
                <Card name={name} text="Wishing you a day filled with love and joy. May all your birthday wishes come true!" />
                <Card name={name} text="On your special day, I hope you are surrounded by happiness and good friends. Have a fantastic birthday!" />
            </div>
        </RecoilRoot>
    )
}

function Card({ name, text }) {

    return (
        <div className="card">
            <p className="card-title">Happy Birthday, {name}!</p>
            <p className="card-text">{text}</p>
        </div>
    )
}