import ContactObject from "./contact"
import LicenseObject from "./license"

type InfoObject = {
    title: string
    summary?: string
    description?: string
    termsOfService?: string
    contact?: ContactObject
    license?: LicenseObject
    version: string
}

export default InfoObject