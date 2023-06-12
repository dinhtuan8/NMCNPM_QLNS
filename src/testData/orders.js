const data_orders = [
    {
        orderID: "10001",
        userID: "1000000",
        addressID: "1000",
        paymentMethod: "cash",
        total_quantity: "12",
        totalMoney: "2010000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123sabcd",
        status: "confirmed"
    },
    {
        orderID: "10002",
        userID: "1000001",
        addressID: "1002",
        paymentMethod: "momo",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abcd",
        status: "intrans"
    },
    {
        orderID: "10003",
        userID: "1000002",
        addressID: "1003",
        paymentMethod: "cash",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abc",
        status: "intrans"
    },
    {
        orderID: "10004",
        userID: "1000003",
        addressID: "1004",
        paymentMethod: "momo",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "",
        status: "cancel"
    },
    {
        orderID: "10005",
        userID: "1000004",
        addressID: "1005",
        paymentMethod: "cash",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123tyabc",
        status: "confirmed"
    },
    {
        orderID: "10006",
        userID: "1000000",
        addressID: "1006",
        paymentMethod: "vnpay",
        total_quantity: "3",
        totalMoney: "610000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123xabc",
        status: "waiting"
    },
    {
        orderID: "10007",
        userID: "1000006",
        addressID: "1007",
        paymentMethod: "zalopay",
        total_quantity: "1",
        totalMoney: "280000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abcd",
        status: "success"
    },
    {
        orderID: "10008",
        userID: "1000000",
        addressID: "1000",
        paymentMethod: "cash",
        total_quantity: "1",
        totalMoney: "150000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abc",
        status: "success"
    },
    {
        orderID: "10009",
        userID: "1000000",
        addressID: "1002",
        paymentMethod: "momo",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abcd",
        status: "intrans"
    },
    {
        orderID: "10010",
        userID: "1000002",
        addressID: "1003",
        paymentMethod: "cash",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abc",
        status: "intrans"
    },
    {
        orderID: "10011",
        userID: "1000003",
        addressID: "1004",
        paymentMethod: "momo",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "",
        status: "cancel"
    },
    {
        orderID: "10012",
        userID: "1000004",
        addressID: "1005",
        paymentMethod: "cash",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abc",
        status: "confirmed"
    },
    {
        orderID: "10013",
        userID: "1000005",
        addressID: "1006",
        paymentMethod: "vnpay",
        total_quantity: "3",
        totalMoney: "380000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "",
        status: "waiting"
    },
    {
        orderID: "10014",
        userID: "1000000",
        addressID: "1007",
        paymentMethod: "zalopay",
        total_quantity: "2",
        totalMoney: "340000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abcd",
        status: "success"
    },
    {
        orderID: "10015",
        userID: "1000000",
        addressID: "1000",
        paymentMethod: "cash",
        total_quantity: "1",
        totalMoney: "150000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abc",
        status: "intrans"
    },
    {
        orderID: "10016",
        userID: "1000001",
        addressID: "1002",
        paymentMethod: "momo",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abcd",
        status: "intrans"
    },
    {
        orderID: "10017",
        userID: "1000002",
        addressID: "1003",
        paymentMethod: "cash",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abc",
        status: "intrans"
    },
    {
        orderID: "10018",
        userID: "1000003",
        addressID: "1004",
        paymentMethod: "momo",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "",
        status: "cancel"
    },
    {
        orderID: "10019",
        userID: "1000004",
        addressID: "1005",
        paymentMethod: "cash",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abc",
        status: "confirmed"
    },
    {
        orderID: "10020",
        userID: "1000005",
        addressID: "1006",
        paymentMethod: "vnpay",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "",
        status: "waiting"
    },
    {
        orderID: "10021",
        userID: "1000006",
        addressID: "1007",
        paymentMethod: "zalopay",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abcd",
        status: "success"
    },
    {
        orderID: "10022",
        userID: "1000000",
        addressID: "1000",
        paymentMethod: "cash",
        total_quantity: "3",
        totalMoney: "510000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abc",
        status: "cancel"
    },
    {
        orderID: "10023",
        userID: "1000001",
        addressID: "1002",
        paymentMethod: "momo",
        total_quantity: "1",
        totalMoney: "150000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abcd",
        status: "intrans"
    },
    {
        orderID: "10024",
        userID: "1000002",
        addressID: "1003",
        paymentMethod: "cash",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abc",
        status: "intrans"
    },
    {
        orderID: "10025",
        userID: "1000003",
        addressID: "1004",
        paymentMethod: "momo",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "",
        status: "cancel"
    },
    {
        orderID: "10026",
        userID: "1000004",
        addressID: "1005",
        paymentMethod: "cash",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abc",
        status: "confirmed"
    },
    {
        orderID: "10027",
        userID: "1000005",
        addressID: "1006",
        paymentMethod: "vnpay",
        total_quantity: "1",
        totalMoney: "160000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "",
        status: "waiting"
    },
    {
        orderID: "10028",
        userID: "1000000",
        addressID: "1007",
        paymentMethod: "zalopay",
        total_quantity: "5",
        totalMoney: "720000.00",
        createAt: "2022-04-22 10:34:23.000",
        deliveryCode: "COD123abcd",
        status: "success"
    }
]


export {
    data_orders
}