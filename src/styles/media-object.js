export default () => `
.media-left {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
  background: transparent;
  display: block;

  margin-right: 10px;
}

.media-right {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
  background: transparent;
  display: block;

  margin-left: 10px;
}

.media-content {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
  background: transparent;
  display: block;

  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  text-align: left;
}

.media {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
  background: transparent;
  display: block;

  -webkit-box-align: start;
  -webkit-align-items: flex-start;
      -ms-flex-align: start;
          align-items: flex-start;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  text-align: left;
}

.media .content:not(:last-child) {
  margin-bottom: 10px;
}

.media .media {
  border-top: 1px solid rgba(211, 214, 219, 0.5);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 10px;
}

.media .media .content:not(:last-child),
.media .media .control:not(:last-child) {
  margin-bottom: 5px;
}

.media .media .media {
  padding-top: 5px;
}

.media .media .media + .media {
  margin-top: 5px;
}

.media + .media {
  border-top: 1px solid rgba(211, 214, 219, 0.5);
  margin-top: 10px;
  padding-top: 10px;
}

.media.is-large + .media {
  margin-top: 20px;
  padding-top: 20px;
}

@media screen and (min-width: 769px) {
  .media.is-large .media-number {
    margin-right: 20px;
  }
}
`;
