#Mock Builder

This project takes HTTP Archive Files (.har) and translates them into [Sinon-Vcr](https://github.com/lunchtime-labs/sinon-vcr/) Ajax Mocks.

Get the HAR files from the Chrome Developer Tools network panel.  After your browser has generated some traffic,
you can right click in the transaction log and select "Save as HAR with Content".  Save the files into the "hars"
subfolder.  This project translates those HAR files into Mock requests which could be useful for things like
unit tests.  The translated mocks will be put into the "mocks" folder with the same name as the .har file.

##How to install

Install as a standard node package

    npm install

Using the command line from this folder, execute this command:

    grunt

This will enable the folder monitoring process, allowing new and changed .har files to be automatically
translated into mocks.

##Configuration

all config changes can be made to:
    config.js

###url

When making requests to a local server, the base url that sinon expects will be /.
You can edit config.js to switch the url to be whatever the external url was.
So if you grab your mocks from "example.com" and have the url set to that in the config,
sinon will then treat any calls to "example.com/foo" as calls to "/foo".

###outputLocation

To automatically copy the mocks into a folder in your application, you can modify
outputlocation to save to anywhere you would like.


