import * as S from './style';

import GreenArea from '../../components/GreenArea'

export const Home = () => {
    const columnsNumber = 20;
    const rowsNumber = 20;

    const rows = [];
    for (let x = 0; x < rowsNumber; x++) {
        let columns = [];

        for (let y = 0; y < columnsNumber; y++)
            columns.push(<GreenArea key={x + y} posX={x} posY={y} />);

        rows.push(<S.TableRow key={x}>{columns}</S.TableRow>);
    }

    return (
        <S.Wrapper>
            <S.Heading>The Forest</S.Heading>
            <S.Table>
                <S.TableBody>
                    {rows}
                </S.TableBody>
            </S.Table>
        </S.Wrapper>
    )
}