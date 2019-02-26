# -*- coding: utf-8 -*-
#
# Copyright (C) 2019 CERN.
#
# inspirehep is free software; you can redistribute it and/or modify it under
# the terms of the MIT License; see LICENSE file for more details.
import os
import sys

from invenio_app.factory import create_api
from invenio_base.app import create_app_factory
from invenio_base.wsgi import create_wsgi_factory
from invenio_config import create_config_loader

from . import config


env_prefix = "APP"


def config_loader(app, **kwargs_config):
    invenio_config_loader = create_config_loader(config=config, env_prefix=env_prefix)
    result = invenio_config_loader(app, **kwargs_config)
    app.url_map.strict_slashes = False
    return result


instance_path = os.getenv(env_prefix + "_INSTANCE_PATH") or os.path.join(
    sys.prefix, "var", "inspirehep-instance"
)


def api_config_loader(app, **kwargs_config):
    return config_loader(app, RESTFUL_API=True, **kwargs_config)


create_app = create_app_factory(
    "inspirehep",
    config_loader=config_loader,
    blueprint_entry_points=["invenio_base.blueprints"],
    extension_entry_points=["invenio_base.apps"],
    converter_entry_points=["invenio_base.converters"],
    wsgi_factory=create_wsgi_factory({"/api": create_api}),
    instance_path=instance_path,
)

application = create_app()
#
# with application.app_context():
from inspirehep.records.api.literature import LiteratureRecord

#
# data = {
#     "$schema": "https://labs.inspirehep.net/schemas/records/hep.json",
#    "_collections":[
#       "Literature"
#    ],
#    "control_number":1234,
#    "document_type":[
#       "thesis"
#    ],
#    "titles":[
#       {
#          "title":"Hello World!"
#       }
#    ]
# }
#
#     record = LiteratureRecord.create(data)
#
#     from invenio_db import db
#     db.session.add(record.model)
#     db.session.commit()
#
# print('\n\n\tSTARTED!\n\n')
