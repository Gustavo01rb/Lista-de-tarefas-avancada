import React from "react";
import { Avatar, Button } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { styled } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

const SContainer = styled('div')(({ outilined }) => ({
  width: '100%',
  display: 'flex',
  maxWidth: '400px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: outilined ? '1px solid #ccc' : 'none',
  borderRadius: '5px',
  padding: outilined ? '10px' : '0',
  gap: '10px',
}));

const StyledLabel = styled('label')({
  display: 'block',
});

const SButtonContainer = styled('div')({
  width: '80%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  gap: '10px',
});

const InputAvatar = ({
  previewSrc,
  setPreviewSrc,
  src,
  alt,
  size = 150,
  sx,
  disabled = false,
  outilined,
  onImageUpload,
  ...restProps
}) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewSrc(reader.result);
    };
    reader.readAsDataURL(file);
    if (onImageUpload) onImageUpload(file);
  };

  const handleDeleteImage = () => {
    setPreviewSrc(null);
    if (onImageUpload) onImageUpload(null);
  };

  return (
    <SContainer outilined={outilined}>
      <Avatar
        alt={alt}
        src={previewSrc || src}
        sx={{ width: size, height: size, cursor: "pointer", ...sx }}
        {...restProps}
      />
      <SButtonContainer>
        <StyledLabel>
          <Button
            style={{ 
              display: "flex", 
              justifyContent: "left", 
              opacity: disabled ? 0.4 : 1,
            }}
            startIcon={<PhotoCamera />}
            component="span"
            variant="contained"
            disabled={disabled}
          >
            Carregar Foto
          </Button>
          {!disabled && (
            <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />)  
          }
        </StyledLabel>
        <Button
          style={{
            display: "flex",
            justifyContent: "left",
            backgroundColor: disabled ? "#ccc" : "red",
            color: disabled ? "#000" :  "white",
            opacity: disabled ? 0.4 : 1,
          }}
          disabled={disabled}
          startIcon={<DeleteIcon />}
          component="span"
          variant="contained"
          onClick={handleDeleteImage}
        >
          Deletar Foto
        </Button>
      </SButtonContainer>
    </SContainer>
  );
};

export default InputAvatar;