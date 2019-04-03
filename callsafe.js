module.exports = cb=>{
	return (...args)=>{
		setTimeout(()=>{
			cb(...args)
		},0)
	}
}
