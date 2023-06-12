const data_inventory = [
    { id: 1, name: 'Wasif', ngaynhaphang: 21, tonkho: 10, daban: 10 },
    { id: 2, name: 'Ali', ngaynhaphang: 19, tonkho: 10, daban: 10 },
    { id: 3, name: 'Saad', ngaynhaphang: 16, tonkho: 10, daban: 10 },
    { id: 4, name: 'Asad', ngaynhaphang: 25, tonkho: 10, daban: 10 },
    { id: 5, name: 'Asad', ngaynhaphang: 25, tonkho: 10, daban: 10 },
    { id: 6, name: 'Asad', ngaynhaphang: 25, tonkho: 10, daban: 10 },
]

const columns_inventory = [
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
        name: 'Ngày Nhập Hàng',
        selector: row => row.ngaynhaphang,
        width: '200px'
    },
    {
      name: 'Tồn kho',
      selector: row => row.tonkho,
    },
    {
      name: 'Đã bán',
      selector: row => row.daban,
    },
];

export{
    data_inventory,
    columns_inventory
}
