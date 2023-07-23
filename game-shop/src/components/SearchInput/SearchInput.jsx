import React, { useState } from "react";
import style from "./SearchInput.module.scss";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
	const [search, setSearch] = useState(null);
	const navigate = useNavigate();

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	const onSubmit = (e) => {
		const form = document.getElementById("searchForm");
		e.preventDefault();
		handleSubmit(search);
		const searchQuery = search.split(" ").join("20%");
		navigate(`/search/${searchQuery}`);
		form.reset();
		setSearch(null);
	};

	return (
		<form className={style.form} id="searchForm" onSubmit={onSubmit}>
			<input
				className={style.input}
				type="text"
				placeholder={placeholder}
				onChange={onChange}
			/>
			<button>Search</button>
		</form>
	);
};

export default SearchInput;
