import { gql } from 'apollo-server';



export const volumesSchema = gql`
    type Query{
        volumes(query:String!): [Book]!
    }

    type Book{
        id: String!
        etag:String!
        selfLink:String!
        volumeInfo: VolumeInfo
        saleInfo: SaleInfo
        accessInfo: AccessInfo
    }
    type VolumeInfo{
        title : String!
        subtitle: String
        authors: [String!]!
        publisher: String
        publishedDate: String
        description: String
        industryIdentifiers: [IndustryIdentifier!]!
        readingModes: ReadingModes!
        pageCount: Int
        printType: String
        categories:[String]!
        maturityRating: String
        allowAnonLogging: Boolean
        contentVersion: String
        panelizationSummary: PanelizationSummary
        imageLinks: ImageLinks
        language:String
        previewLink: String
        canonicalVolumeLink: String
    }
    type IndustryIdentifier{
        type: String!
        identifier: String!
    }
    type ReadingModes{
        text: Boolean!
        image: Boolean!
    }

    type PanelizationSummary{
        containsEpubBubbles : Boolean!
        containsImageBubbles : Boolean!
    }

    type ImageLinks{
        smallThumbnail: String!
        thumbnail : String!
    }

    type SaleInfo{
        country:String!
        saleability: String!
        isEBook: Boolean!
    }
    type AccessInfo{
        country: String!
        viewAbility: String!
        embeddable: Boolean!
        publicDomain: Boolean!
        textToSpeechPermission: String!
        epub: EPUB!
        pdf:PDF!
        webReaderLink: String!
        accessViewStatus: String!
        quoteSharingAllowed: Boolean!
    }

    type PDF{
        isAvailable: Boolean!
    }

    type EPUB{
        isAvailable: Boolean!
    }
    
`