import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

// перевод времени в минуты для удобной сортирвки
function toMin(time) {
    let min = time.split(':');
    return parseInt(min[0]) * 60 + parseInt(min[1]);
}
const columns = [
    {
        title: 'Name',
        dataIndex: 'Fullname',
        key: 'name',
        width: 150,
        fixed: 'left',
        align: 'center',
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm}) => {
            return <Input 
                    value={selectedKeys[0]}
                    autoFocus 
                    onChange={(e) => {
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }}
                    placeholder='Search'
                    onPressEnter={() => {
                        confirm()
                    }}
                    onBlur={() => {
                        confirm()
                    }} >
                </Input> 
        },
        filterIcon: () => {
            return <SearchOutlined />
        },
        onFilter: (value, record) => {
            return record.Fullname.toLowerCase().includes(value.toLowerCase())
        }
    },
]
// цикл для генерации колонок дней
for(let i=1; i<=31; i++) {
    let obj = {
        title: i,
        dataIndex: `Day${i}`,
        key: i,        
        align: 'center',
        sorter: (a, b) => toMin(a[`Day${i}`]) - toMin(b[`Day${i}`]),
    };
    columns[i] = obj;
    console.log(columns)
}
columns.push({
    title: 'Summary',
    dataIndex: 'summary',
    key: 'summary',
    width: 150,
    fixed: 'right',
    align: 'center',
    sorter: (a, b) => toMin(a.summary) - toMin(b.summary),
});
export default columns;