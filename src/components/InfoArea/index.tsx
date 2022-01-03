import * as C from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

    // passar o newMonth através do onMonthChange para o App.tsx
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1 );
        //passa o valor de newMonth
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1 );
        //passa o valor de newMonth
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const balance = (incomeCalc: number, expenseCalc: number) => {
        return parseFloat((incomeCalc - expenseCalc).toFixed(2));
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem 
                title="Balanço" 
                value={balance(income, expense)}
                color={balance(income, expense) < 0 ? 'red' : 'green'}
                />
            </C.ResumeArea>
        </C.Container>
    );
}