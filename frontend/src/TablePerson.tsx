import * as React from 'react';
import {
    Button,
    InputField,
    Link,
    Modal,
    ModalButtonPanel,
    ModalContent,
    ModalTitle,
    Table /*, T*/
} from '@admiral-ds/react-ui';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';
import type {TableProps, Column/*, TableRow*/} from '@admiral-ds/react-ui';
import {useEffect, useState} from "react";
//import {ModalForm} from "./EditPerson.tsx";
import styled from "styled-components";

/*type RowData = TableRow & {
    transfer_type: string;
    transfer_date: string;
    transfer_amount: React.ReactNode;
    currency: string;
    rate: number;
};

let rowList: RowData[] = [];*/
const Separator = styled.div`
  height: 20px;
`;

type Props = {
    onYesClick: (p: {
        action: boolean, tabNumValue: string, sNameValue: string, nameValue: string, fNameValue: string
    }) => void;
    onNoClick: () => void;
};

const columnList: Column[] = [
    {name: 'tabNum', title: 'Табельный номер', width: 150},
    {name: 'sName', title: 'Фамилия', width: 170},
    {name: 'name', title: 'Имя', width: 170},
    {name: 'fName', title: 'Отчество', width: 170},
    {name: 'action', title: ' '}
];

let person = [];


const ModalForm = ({pEdit, pTabNum, pSName, pName, pFName, onYesClick, onNoClick}: Props) => {
    const [action, setAction] = useState(pEdit);
    const [tabNumValue, setTabNumValue] = useState(pTabNum);
    const [sNameValue, setSNameValue] = useState(pSName);
    const [nameValue, setNameValue] = useState(pName);
    const [fNameValue, setFNameValue] = useState(pFName);

    let lAction = (action) ? 'изменить' : 'добавить';

    return (
        <>
            <ModalContent>
                На этой форме предполагается {lAction} человека
                <Separator/>
                <InputField
                    label="Табельный номер"
                    value={tabNumValue}
                    readOnly={action}
                    onChange={(e) => {
                        setTabNumValue(e.target.value);
                    }}
                />
                <Separator/>
                <InputField
                    label="фамилия"
                    value={sNameValue}
                    onChange={(e) => {
                        setSNameValue(e.target.value);
                    }}
                />
                <Separator/>
                <InputField
                    label="Имя"
                    value={nameValue}
                    onChange={(e) => {
                        setNameValue(e.target.value);
                    }}
                />
                <Separator/>
                <InputField
                    label="Отчество"
                    value={fNameValue}
                    onChange={(e) => {
                        setFNameValue(e.target.value);
                    }}
                />
            </ModalContent>
            <ModalButtonPanel>
                <Button appearance="primary" dimension="m"
                        onClick={() => onYesClick({action,tabNumValue, sNameValue, nameValue, fNameValue})}>
                    Сохранить
                </Button>
                <Button appearance="secondary" dimension="m" onClick={onNoClick}>
                    Отмена
                </Button>
            </ModalButtonPanel>
        </>
    );
};

export const TablePerson = (props: TableProps) => {
    const [cols, setCols] = useState(columnList);
    const [opened, setOpened] = useState(false);
    const [editor, setEditor] = useState(false);
    const [tabNumValue, setTabNumValue] = useState('');
    const [sNameValue, setSNameValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [fNameValue, setFNameValue] = useState('');
    const [dataPerson, setDataPerson] = useState([]);

    const handleResize = ({name, width}: { name: string; width: string }) => {
        const newCols = cols.map((col) => (col.name === name ? {...col, width} : col));
        setCols(newCols);
    };

    function deleteRow(personId, rowId) {
        console.log('Удаляем tabNum=' + personId);
        fetch("./api/delete/" + personId)
            .then(response => {
                if (response.ok) { return response.text(); }
                return Promise.reject(response);
            })
            .then(data => {
                let clonePerson = [];
                let j=0;
                for (var i = 0; i < person.length; i++)
                    if (i != rowId) clonePerson[j++] = person[i];
                console.log('Удалён => ' + rowId + " из " + person.length);
                setDataPerson(clonePerson);
            })
            .catch((response) => {
                response.json().then((json: any) => alert(json.message))
            })
    }

     function SetRow(pPerson, rowId) {
        const lTabNum = pPerson.tabNum;
        const lSName = pPerson.sName;
        const lName = pPerson.name;
        const lFName = pPerson.fName;
        pPerson.tabNum = <Link onClick={() => {
            setTabNumValue(lTabNum);
            setSNameValue(lSName);
            setNameValue(lName);
            setFNameValue(lFName);
            setEditor(true);
            setOpened(true);
        }}>{pPerson.tabNum}</Link>
        pPerson.action = <Link><DeleteOutline width={20} onClick={() => deleteRow(lTabNum, rowId)}/></Link>
    }

    function changeRow(pAction, pTabNum, pSName, pName, pFName) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tabNum : pTabNum, name: pName, fname: pFName, sname: pSName })
        };
        console.log('Работаем с tabNum=' + pTabNum);

        fetch((pAction) ? "./api/editPerson/" : "./api/addPerson/", requestOptions)
            .then((response) => {
                if (response.ok) { return response.text(); }
                return Promise.reject(response);
            })
            .then(data => {
                let onePerson = JSON.parse(data);
                let clonePerson = [];
                let used = false;
                console.log(((pAction) ? 'Изменён' : 'Добавлен') + ' => ' + onePerson.tabNum);
                for (var i = 0; i < person.length; i++) {
                    if (person[i].tabNum.props.children == onePerson.tabNum) {
                        person[i] = onePerson;
                        SetRow(person[i], i);
                        used = true;
                        console.log('Сохранили состояние name');
                    }
                    clonePerson[i] = person[i];
                }
                if (!used) {
                    clonePerson[person.length] = onePerson;
                    SetRow(clonePerson[person.length], person.length);
                    person[person.length] = clonePerson[person.length];
                }
                setDataPerson(clonePerson);
            })
            .catch((response) => {
                response.json().then((json: any) => {
                    alert(json.message);
                })
            })
    }

     useEffect(() => {
        fetch("./api/dataPerson")
            .then(response => response.text())
            .then(data => {
                person = JSON.parse(data);
                //let person = JSON.parse('[{"tabNum": "226102","name": "Константин","fName": "Аркадьевич","sName": "Шевнин"},{"tabNum": "333","name": "Андрей","fName": "Егорович","sName": "Тестов"}]');
                for (var i = 0; i < person.length; i++) SetRow(person[i], i);
                setDataPerson(person);
                console.log('Отрисовали таблицу');
            });
    }, [])

    return (
        <div>
            <Button onClick={() => {
                setEditor(false);
                setOpened(true);
            }
            }> Добавить запись</Button>
            <Separator/>
            <Table id="persons" {...props} greyHeader rowList={dataPerson} columnList={cols} onColumnResize={handleResize}/>
            {opened && (
                <Modal
                    {...props}
                    onClose={() => {
                        setOpened(false);
                    }}
                    aria-labelledby="modal-title"
                >
                    <ModalTitle id="modal-title">{(editor) ? "Изменить" : "Добавить"} человека</ModalTitle>
                    <ModalForm
                        pEdit={editor}
                        pTabNum={tabNumValue}
                        pSName={sNameValue}
                        pName={nameValue}
                        pFName={fNameValue}
                        onYesClick={(p) => {
                            changeRow(p.action, p.tabNumValue, p.sNameValue, p.nameValue, p.fNameValue);
                            setOpened(false);
                        }}
                        onNoClick={() => setOpened(false)}
                    />
                </Modal>
            )}
        </div>
    )
};

