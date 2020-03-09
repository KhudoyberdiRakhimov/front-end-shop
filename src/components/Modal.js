import React, {Component} from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../context'
import {DetailButtons} from './Button'
import {Link} from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return(
            <ProductConsumer>
                {(value) => {
                    const {img, title, price} = value.modalProduct;
                    const {modalOpen, closeModal} = value;
                    
                    if(!modalOpen) {
                        return false;
                    }
                    else {
                        return(
                        <ModalContainer>
                            <div className='container'>
                                <div className='row'>
                                    <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center p-5'>
                                        <h5>Added to cart</h5>
                                        <img src={img} className='img-fluid' alt='product' />
                                        <h5>{title}</h5>
                                        <h5 className='text-muted'>${price}</h5>
                                        <Link to='/'>
                                            <DetailButtons onClick={() => closeModal()}>
                                                store
                                            </DetailButtons>
                                        </Link>
                                        <Link to='/cart'>
                                            <DetailButtons cart onClick={()=> closeModal()}>
                                                go to Cart
                                            </DetailButtons>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    }
                }
                }
            </ProductConsumer>
        )
    }
}
const ModalContainer = styled.div `
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`;