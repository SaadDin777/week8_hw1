let token = `73da33b36e50f29332aa88f70ed77cf353ef319d535ba0f4`

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://neat-sports-app.herokuapp.com/api/sports`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data:any) => {
        const response = await fetch(`https://neat-sports-app.herokuapp.com/api/sports`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:{}) => {
        const response = await fetch(`https://neat-sports-app.herokuapp.com/api/sports/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error(`Failed to Update Sport Id ${id} on server`)
        }

        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`https://neat-sports-app.herokuapp.com/api/sports/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error(`Failed to Delete Sport Id ${id} `)
        }

        return await response.json()
    }
}