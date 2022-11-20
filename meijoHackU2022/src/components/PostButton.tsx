import { 
  Box
} from '@chakra-ui/react'
import React from 'react'
import theme from '../theme'
import {
  BiCommentAdd
} from 'react-icons/bi'


const postButtonStyle = {
  bottom:'1rem',
  right:'1rem',
  width:'4rem',
  height:'4rem',
  borderRadius:'2rem',
}

const PostButton: React.FC = () => {
  
  return (
    <Box as='button' bgColor={theme.colors.main} pos='absolute' style={{...postButtonStyle}} >
      <BiCommentAdd size={'1.6rem'} style={{margin:'0 auto',transform:'scale(-1,1)'}} /> 投稿
    </Box>
  )
}; 

export default PostButton;
