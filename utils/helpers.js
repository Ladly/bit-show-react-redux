import { Show } from './../entities/Shows'
import { ShowDetails } from './../entities/ShowDetails'
import { Akas } from './../entities/Akas'
import { Cast } from './../entities/Cast'
import { Season } from './../entities/Season'
import { Crew } from './../entities/Crew'
import { Episode } from './../entities/Episode'
import { ShowUser } from './../entities/ShowUser'
import { BlogPost } from './../entities/BlogPost'
import { BlogPostAuthor } from './../entities/BlogPostAuthor'
import { BookTextPosts } from './../entities/BookTextPosts'
import { BookImagePosts } from './../entities/BookImagePosts'
import { BookVideoPosts } from './../entities/BookVideoPosts'
import { BookPostComments } from './../entities/BookPostComments'
import { BookProfile } from './../entities/BookProfile'
import { BookUsers } from './../entities/BookUsers'

export const createShow = (showsArray) => {
	return showsArray.map(show => {
		return new Show(show.id, show.name, show.image, show.rating)
	})
}

export const createShowDetails = (obj) => {
	const tagLessShowSummary = removeTags(obj.summary)
	return new ShowDetails(obj.id, obj.image,tagLessShowSummary , obj.name, obj.akasInstances, obj.castInstances, obj.seasonsInstances)
}

export const createAkas = (arr) => {
	return arr.map(aka => {
		return new Akas(aka.name)
	})
}

export const createCast = (arr) => {
	return arr.map(cast =>{
		return new Cast(cast.person, cast.character)
	})
}

export const createSeasons = (seasons) => {
	return seasons.map(season => {
		return new Season(season.number, season.premiereDate, season.endDate)
	})
}

export const createCrew = (crew) => {
	return crew.map(member => {
		return new Crew(member.type, member.person)
	})
}

export const createEpisodes = (episodes) => {
	return episodes.map(episode => {
		const tagLessEpisodeSummary = removeTags(episode.summary)
		return new Episode(episode.id, episode.name, episode.season, episode.number, tagLessEpisodeSummary)
	})
}

export const selectThreeTopShows = (showsArray) => {
	const sorted = showsArray.sort((a, b) => {
		return a.rating.average - b.rating.average
	})

	return sorted.reverse()
}

export const getSeasonEpisodes = (episodesArray, seasonNumber) => {
	return episodesArray.filter(episode => {
		return episode.season === seasonNumber
	})
}

export const createShowUser = (usersArray) => {
	return usersArray.map(user => {
		const formatedDate = formatDate(user.dob)
		const hiddenEmail = hideEmail(user.email)
		return new ShowUser(formatedDate, hiddenEmail, user.gender, user.name, user.picture, user.last)
	})
}

export const hideEmail = (email) => {
	const firstPart = email.slice(0,3)
	const endPart = email.slice(email.indexOf('@') )

	const hiddenEmail = `${firstPart}...${endPart}`
	return hiddenEmail
}

export const formatDate = (date) => {
	const newDate = new Date(date)
	const birthday = newDate.getDate()
	const month = newDate.getMonth()
	const year = newDate.getFullYear()

	const formatedDate = `${birthday}.${month}.${year}`
	return formatedDate
}

export const removeTags = (string) => {
	const tagLessString = 
	string.replace('<p>', '')
		.replace('</p>', '')
		.replace('<b>', '')
		.replace('</b>', '')
	
	return tagLessString
}

export const getRandomPosts = (blogPostsArray) => {             //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	for (let i = blogPostsArray.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[blogPostsArray[i], blogPostsArray[j]] = [blogPostsArray[j], blogPostsArray[i]]
	}
	return blogPostsArray.slice(45, 55)
}

export const formatText = (string, from, to) => {
	return `${string.slice(from, to)}...`
}

export const createBlogPost = (blogPost) => {
	return new BlogPost (blogPost.userId, blogPost.id, blogPost.title, blogPost.body)
}

export const createBlogPosts = (blogPostsArray) => {
	return blogPostsArray.map(blogPost => {
		return new BlogPost (blogPost.userId, blogPost.id, blogPost.title, blogPost.body)
	})
}

export const createBlogPostAuthor = (author) => {
	const { id, name, username, email, address,phone, company } = author
	return new BlogPostAuthor(id, name, username, email, address, phone, company)
}

export const createBlogPostAuthors = (authorsArray) => {
	return authorsArray.map(author => {
		const { id, name, username, email, address,phone, company } = author
		return new BlogPostAuthor(id, name, username, email, address, phone, company)
	})
}

export const createBookTextPost = (post) => {
	return new BookTextPosts(post.commentsNum, post.dateCreated, post.id, post.userDisplayName, post.userId, post.text, post.type)
}

export const createBookImagePost = (post) => {
	return new BookImagePosts(post.commentsNum, post.dateCreated, post.id, post.userDisplayName, post.userId, post.imageUrl, post.type)
}

export const createBookVideoPost = (post) => {
	return new BookVideoPosts(post.commentsNum, post.dateCreated, post.id, post.userDisplayName, post.userId, post.videoUrl, post.type)
}

export const createBookPosts = (posts, textCB, imageCB, videoCB) => {
	return posts.map(post => {
		if(post.type === 'text') {
			return textCB(post)
		} else if (post.type === 'image'){
			return imageCB(post)
		} else {
			return videoCB(post)
		}
	})
}

export const bookVideoPostUrlToEmbed = (url) => {
	return url.replace('watch?v=', 'embed/')
}

export const createBookPostComments = (comments) => {
	return comments.map(comment => {
		return new BookPostComments(comment.id, comment.dateCreated, comment.body, comment.postId, comment.authorName, comment.authorId)
	})
}

export const createBookProfile = (profile) => {
	return new BookProfile(profile.userId, profile.name, profile.email, profile.aboutShort, profile.about, profile.avatarUrl, profile.postsCount, profile.commentsCount)
}

export const createBookUsers = (users) => {
	return users.map(user => createBookSingleUserProfile(user))
}

export const createBookSingleUserProfile = (user) => {
	return new BookUsers(user.id, user.name, user.aboutShort, user.lastPostDate, user.avatarUrl)
}