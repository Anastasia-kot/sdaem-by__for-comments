import styles from './Pagination.module.scss'
import React, {  FC, ReactComponentElement, ReactElement, useState } from 'react';
 
import ReactPaginate from 'react-paginate';
 

type ItemsProps = {
    currentItems: Array<any>
    Component: any 
    style?: string
}
const Items: FC<ItemsProps> =( { currentItems, Component, style } ) => <> 
        {style
            ?  currentItems && currentItems.map((n) => <Component key={n.id} data={n} style={style} />) 
            :  currentItems && currentItems.map((n) => <Component key={n.id} data={n}  />) 
        }
    </>




type PaginatedItemsProps = {
    itemsPerPage:number 
    items: Array<any> 
    Component: any  
    style?: string
} 
export const PaginatedItems: FC<PaginatedItemsProps> = ( { itemsPerPage, items, Component, style } ) => {

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} Component={Component}  style={style} />
            <ReactPaginate
                breakLabel="..."
                nextLabel={'null'}
                previousLabel={'null'}

                onPageChange={handlePageClick}
                pageRangeDisplayed={9}
                pageCount={pageCount}
                renderOnZeroPageCount={null}

                className={'containerClassName'}
                containerClassName={'containerClassName'}

                breakClassName={'breakClassName'}
                breakLinkClassName={'breakLinkClassName'}

                previousClassName={'previousClassName'}	
                nextClassName={'nextClassName'}
                
                pageClassName={'pageClassName'}  
                pageLinkClassName={'pageLinkClassName'}

                activeClassName={'activeClassName'}
                activeLinkClassName={'activeLinkClassName'}
              
            />
        </>
    );
}

 
















 


 