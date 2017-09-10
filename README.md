# Stack Overflow theme for jsonresume

**Printable version with custom CSS**

## Getting started

### Install the command line

Create your resume in json on [jsonresume](https://jsonresume.org)

The official [resume-cli](https://github.com/jsonresume/resume-cli) to run the development server.

Go ahead and install it:

```
sudo npm install -g resume-cli
```
### Install and serve theme

Clone the repository

```
npm install jsonresume-theme-stackoverflow
```

then change directory:

`cd node_modules/jsonresume-theme-stackoverflow/`

And simply run:

```
resume serve
```

You should now see this message:

```
Preview: http://localhost:4000
Press ctrl-c to stop
```

To build your own resume, create a 'resume.json' file in the current folder and follow the [json resume schema](https://jsonresume.org/schema/)

### Social Profiles Icons

**Profiles supported with brand colors:**

github, stack overflow, linkedin, dribbble, twitter, facebook, pinterest, instagram, soundcloud, wordpress, youtube, flickr, google plus, tumblr, foursquare.

To have a social icon close the social link profile (or username) it is enough to set a `network` the name of the Social Network (es: 'Stack Overflow').

#### Support to extra fields

With stackoverflow theme it is possible to add:

- `keywords` to each 'work', 'publication' and 'volunteer' item
- `summary` to each 'interests' and 'education' item
- `location` to each 'work', 'education' and 'volunteer' item
- `birth` to 'basics'

example of the extra `location` object:

```
"location": {
  "city": "Zürich",
  "countryCode": "CH",
  "region": "Switzerland"
}
```
example of the extra `birth` object:

```
"birth": {
  "place": "New York",
  "state": "USA",
  "date": "1988"
}
```

## License

Available under the [MIT license](http://opensource.org/licenses/mit-license.php).
