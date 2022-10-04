import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { 
    chooseName,
    chooseDescription,
    choosePrice,
    chooseSpeed,
    chooseTraits,
    chooseHeight,
    chooseWeight 
} from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface SportFormProps {
    id?:string;
    data?:{}
}

interface SportState {
    name: string,
    description: string,
    price: string,
    max_speed: string,
    traits: string,
    height: string,
    weight: string

}

export const SportForm = (props:SportFormProps) => {

    const dispatch = useDispatch();
    let { sportData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<SportState>(state => state.name)
    const description = useSelector<SportState>(state => state.description)
    const price = useSelector<SportState>(state => state.price)
    const max_speed = useSelector<SportState>(state => state.max_speed)
    const traits = useSelector<SportState>(state => state.traits)
    const height = useSelector<SportState>(state => state.height)
    const weight = useSelector<SportState>(state => state.weight)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseName(data.description))
            dispatch(chooseName(data.price))
            dispatch(chooseName(data.max_speed))
            dispatch(chooseName(data.traits))
            dispatch(chooseName(data.height))
            dispatch(chooseName(data.weight))
            await serverCalls.create(store.getState())
            window.location.reload()
            event.targte.reset()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Sport Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="description">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="max_speed">Max Speed</label>
                    <Input {...register('max_speed')} name="max_speed" placeholder="Max Speed"/>
                </div>
                <div>
                    <label htmlFor="traits">Traits</label>
                    <Input {...register('traits')} name="traits" placeholder="Traits"/>
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    <Input {...register('height')} name="height" placeholder="Height"/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <Input {...register('weight')} name="weight" placeholder="Weight"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}