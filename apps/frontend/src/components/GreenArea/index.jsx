import { useState } from 'react';
import { EventEmitter } from 'events';
import * as S from './style';

const status = {
    healthy: {
        name: "healthy",
        color: "#00b894",
        icon: "🌲"
    },
    burning: {
        name: "burning",
        color: "#d63031",
        icon: "🔥"
    },
    burnt: {
        name: "burnt",
        color: "#b2bec3",
        icon: "💀"
    }
}

const GreenArea = ({ posX, posY, burnTime }) => {
    const [state, setState] = useState({
        status: status.healthy
    });

    const checkPosition = ({ x, y }) => (
        (x === posX || x === posX - 1 || x === posX + 1) &&
        (y === posY || y === posY - 1 || y === posY + 1) &&
        (x !== posX && y !== posY)
    );

    const eventEmitter = new EventEmitter();
    eventEmitter.on('startBurning', ({ x, y }) => {
        console.log(`[${posX},${posY}]: listen [${x},${y}]`);
        console.log(`[${posX},${posY}]: checked: ${checkPosition(x, y)}`);
        if (state.status.healthy && checkPosition(x, y))
            burnGreenArea();
    })

    const burnGreenArea = () => {
        if (state.status === status.healthy) {
            setState({
                status: status.burning
            })

            eventEmitter.emit("startBurning", {
                x: posX,
                y: posY
            });

            setTimeout(() => setState({
                status: status.burnt
            }), burnTime || 3000)
        }
    }

    return (
        <S.DataCell onClick={burnGreenArea} status={state.status.color}>
            {state.status.icon}
        </S.DataCell>
    )
}

export default GreenArea;