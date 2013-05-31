window.Backbone.Models || = {}

class window.Backbone.Models.Indicator extends Backbone.Model
  defaults:
    name: ''
    metadata: null
    data: null

  fetchAllData: (successCallback) ->
    @getMetadata((metadata)=>
      @set('metadata', metadata)
      @getData((data)=>
        @set('data', data)
        successCallback()
      )
    )

  getMetadata: (successCallback) ->
    $.ajax(
      url: "json/indicators/#{@get('name')}/metadata.json"
    ).done(successCallback)

  getData: (successCallback) ->
    $.ajax(
      url: "json/indicators/#{@get('name')}.json"
    ).done(successCallback)

  getCategories: ->
    xAxisField = @get('metadata').axes.x.field
    categories = []
    for entry in @get('data')
      categories.push(entry[xAxisField])
    return categories

  getSeries: ->
