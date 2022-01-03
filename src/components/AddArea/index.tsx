import { useState } from 'react';
import * as C from './style'
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';

type Props = {
    onAdd: (item: Item) => void;
}

export const AddArea = ({ onAdd }: Props) => {

    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('Selecione a categoria...');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);
    let catKeys = Object.keys(categories);


    const handleAddEvent = () => {
        // validar campos
        if (
            dateField === '' ||
            categoryField === 'Selecione a categoria...' ||
            titleField === '' ||
            valueField === 0
        ) {
            alert("Existem campos inválidos");
        }
        else {
        let [year, month, day] = dateField.split('-');

        let newItem: Item = {
            date: new Date(parseInt(year), parseInt(month)-1, parseInt(day)),
            category: categoryField,
            title: titleField,
            value: valueField,
        };
        onAdd(newItem);
        }
    }


    return (
        <C.Container>
            <C.InputDate 
                value={dateField}
                onChange={e=>setDateField(e.target.value)}
            />
            <C.SelectCategory onChange={e=>setCategoryField(e.target.value)}>
                <option>{'Selecione a categoria...'}</option>
                {
                    catKeys.map((item, index)=>{
                        return (
                        <option key ={index} value={`${item}`}>{categories[item].title}</option>
                        )
                    })
                }
            </C.SelectCategory>
            <C.InputTitle 
            placeholder="Digite o Título"
            value={titleField}
            onChange={e=>setTitleField(e.target.value)}
            />
            <C.InputValue 
            placeholder="R$ reais(ponto)centavos"
            value={valueField}
            onChange={e=>setValueField(parseFloat(e.target.value))}
            />
            <C.Btn onClick={handleAddEvent}>Adicionar</C.Btn>
        </C.Container>
    );
}