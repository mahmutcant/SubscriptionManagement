import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    currentAccount: {
        id: 1,
        userName: "mahmutcant01",
        fullName: "Mahmut Can Tuncer",
        avatar: "https://pbs.twimg.com/profile_images/1636115230630506496/o6TOR0nf_400x400.jpg",
        orders: [
            {
                id: 1,
                date: "Oct 21,2023",
                type: "Pro Annual"
            },
            {
                id: 2,
                date: "Aug 10,2023",
                type: "Sponsored Post"
            },
            {
                id: 3,
                date: "July 3,2024",
                type: "Pro Portfolio"
            },
            {
                id: 4,
                date: "July 3,2024",
                type: "Pro Portfolio"
            }
        ],
        paymentMethod: {
            endVisaDate: "2025",
            brand: "https://cdn.iconscout.com/icon/free/png-256/free-visa-3521795-2945212.png?f=webp&w=256"
        }
    },
    accounts: [
        {
            id: 1,
            userName: "mahmutcant01",
            fullName: "Mahmut Can",
            avatar: "https://pbs.twimg.com/profile_images/1636115230630506496/o6TOR0nf_400x400.jpg",
            orders: [
                {
                    date: "Oct 21,2023",
                    type: "Pro Annual"
                },
                {
                    date: "Aug 10,2023",
                    type: "Sponsored Post"
                },
                {
                    date: "July 3,2024",
                    type: "Pro Portfolio"
                }
            ],
            paymentMethod: {
                endVisaDate: "2028",
                brand: "https://cdn.iconscout.com/icon/free/png-256/free-visa-3521795-2945212.png?f=webp&w=256"
            }
        },
        {
            id: 2,
            userName: "Ahm3tcan1",
            fullName: "Hakim Ziyech",
            avatar: "https://pbs.twimg.com/profile_images/1787856334882222080/t7Hp6bgn_400x400.jpg",
            orders: [
                {
                    date: "Oct 21,2023",
                    type: "Pro Annual"
                },
                {
                    date: "Aug 10,2023",
                    type: "Sponsored Post"
                },
                {
                    date: "July 3,2024",
                    type: "Pro Portfolio"
                }
            ],
            paymentMethod: {
                endVisaDate: "2028",
                brand: "https://cdn.iconscout.com/icon/free/png-256/free-visa-3521795-2945212.png?f=webp&w=256"
            }
        }
    ]
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        _addAccounts: (state,action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state,action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if(state.currentAccount && action.payload === state.currentAccount.id){
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        },
        _removeOrder: (state,action) => {
            state.currentAccount.orders = state.currentAccount.orders.filter(order => order.id !== action.payload.id)
        }
    }
})

export const {_addAccounts,_setCurrentAccount,_removeAccount,_removeOrder} = auth.actions
export default auth.reducer