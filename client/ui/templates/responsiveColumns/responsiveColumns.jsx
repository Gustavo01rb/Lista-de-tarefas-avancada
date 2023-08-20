import React from "react";
import {styled, Box} from "@mui/system";


const SContainer = styled(Box)(({
    color = 'transparent',
    padding = '0',
    paddingTop = 'auto',
    alignItems = 'flex-start',
    justifyContent = 'center',
    width
})=>({
    width: width,
    display: 'flex',
    flexDirection: 'row',
    alignItems: alignItems,
    justifyContent: justifyContent,
    backgroundColor: color,
    padding: padding,
    paddingTop: paddingTop,
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        alignItems: 'center',
    },
  }));
  
const Column = styled(Box)(({
    paddingColumn = '0',
    alignItemsColumn = 'center',
    minWidthColumn = '0',
    maxWidthColumn = '100%',
    widthColumn = '50%',
})=>({
    display: 'flex',
    flexDirection: 'column',
    width: widthColumn,
    padding: paddingColumn,
    alignItems: alignItemsColumn,
    minWidth: minWidthColumn,
    maxWidth: maxWidthColumn,
    '@media (max-width: 768px)': {
        width: '100%',
        padding: '0',
        alignItems: 'center',
    },

}));


const ResponsiveColumns = ({children, ...props}) => {
    return (
        <SContainer {...props}>
            <Column {...props}>
                {children[0]}
            </Column>
            <Column {...props}>
                {children[1]}
            </Column>
        </SContainer>
    );
}

export default ResponsiveColumns;