import careerData from '../data/careerData.js'
import collegeData from '../data/collegeData.js'

export const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export const getCareerSlug = (career) => slugify(career.career_name)

export const findCareerBySlug = (slug) =>
  careerData.find((career) => getCareerSlug(career) === slug)

export const getCollegesForCareer = (careerName) =>
  collegeData.filter((college) => college.courses_offered.includes(careerName))

export const getCareerNames = () => careerData.map((career) => career.career_name)
