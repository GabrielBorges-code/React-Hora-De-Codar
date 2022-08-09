import Button from "./evento/Button";

function Evento() {

    function meuEvento() {
        console.log(`Ativando primeiro evento`);
    }

    function segundoEvento() {
        console.log(`Ativando o segundo evento`)
    }

    return (
        <div>
            <p>Clica para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <br/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    );
}

export default Evento;