const data_sales =  [
    { id: 1, name: 'Wasif', daban: 21, sotien: 2000000},
    { id: 2, name: 'Ali', daban: 19, sotien: 2000000},
    { id: 3, name: 'Saad', daban: 16, sotien: 1000000},
    { id: 4, name: 'Asad', daban: 25, sotien: 1020000},
    { id: 5, name: 'Asad', daban: 25, sotien: 1020000},
    { id: 6, name: 'Asad', daban: 25, sotien: 1020000},
    { id: 7, name: 'Asad', daban: 25, sotien: 1020000},
    { id: 8, name: 'Asad', daban: 25, sotien: 1020000},
    { id: 9, name: 'Asad', daban: 25, sotien: 1020000},
    { id: 10, name: 'Asad', daban: 25, sotien: 1020000},
    { id: 11, name: 'Asad', daban: 25, sotien: 1020000},
    { id: 12, name: 'Asad', daban: 25, sotien: 1020000},
    { id: 13, name: 'Asad', daban: 25, sotien: 1020000},
    { id: 14, name: 'Asad', daban: 25, sotien: 1020000},
    { id: 15, name: 'Asad', daban: 25, sotien: 1020000},
]

const columns_sales = [
    {
      name: 'STT',
      selector: row => row.id,
    },
    {
        name: 'Tựa Sách',
        selector: row => row.name,
        width: '300px'
    },
    {
        name: 'Đã bán',
        selector: row => row.daban,
    },
    {
      name: 'Số tiền',
      selector: row => row.sotien,
    },
];


export{
    data_sales,
    columns_sales
}