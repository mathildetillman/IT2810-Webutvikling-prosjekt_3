import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { setSearch, setPage } from "./../actions/index";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    setSearch: searchString => {
      dispatch(setSearch({ searchString }));
      dispatch(setPage({ change: 0 }));
    }
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3px 4px",
    display: "flex",
    alignItems: "center",
    width: "300px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

function SearchBar(props) {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");

  function handleSearchChange(e) {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      props.setSearch("");
    }
  }

  function handleSearchKeyPress(e) {
    if (e.key === "Enter") {
      search();
    }
  }

  function search() {
    props.setSearch(searchValue);
  }

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Søk i drikkevarer"
        inputProps={{ "aria-label": "search google maps" }}
        value={searchValue}
        onChange={handleSearchChange}
        onKeyPress={handleSearchKeyPress}
        data-cy="input"
      />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={search}
        id="SearchButton"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
