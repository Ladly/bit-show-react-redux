class BlogPostAuthor {
	constructor(id, name, username, email, address, phone, company) {
		this.id = id
		this.name = name
		this.username = username
		this.email = email
		this.address = address.street
		this.phone = phone
		this.company = company.name
		this.city = address.city
		this.zipcode = address.zipcode
		this.lat = address.geo.lat
		this.long = address.geo.lng
		this.slogan = company.catchPhrase 
	}
}

export { BlogPostAuthor }