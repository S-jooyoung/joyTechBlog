import React from 'react';
import { navigate } from 'gatsby';
import { Autocomplete, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import './style.scss';

const CustomPaper = (props) => (
  <Paper
    sx={{
      scrollbarWidth: '5px',
      borderRadius: '0px 0px 5px 5px',
      boxShadow: 'none',
    }}
    {...props}
  />
);

function PostSearch({ posts }) {
  return (
    <Autocomplete
      disableClearable
      options={posts}
      onInputChange={(event, value, reason) => {
        if (reason === 'reset' && value) {
          const item = posts.find((item) => item.title === value);
          if (!item) return;
          navigate(item.slug);
        }
      }}
      filterOptions={(options, { inputValue }) =>
        options.filter(
          ({ title, categories }) => title.includes(inputValue) || categories.includes(inputValue),
        )
      }
      PaperComponent={CustomPaper}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <div className="search-input-wrapper">
          <TextField
            {...params}
            className="search-input"
            variant="standard"
            size="medium"
            InputProps={{
              ...params.InputProps,
              endAdornment: <SearchIcon className="search-icon" />,
            }}
          />
        </div>
      )}
      noOptionsText="해당하는 글이 없습니다."
    />
  );
}
export default PostSearch;
