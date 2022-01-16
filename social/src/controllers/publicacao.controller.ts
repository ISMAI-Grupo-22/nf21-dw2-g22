import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Publicacao} from '../models';
import {PublicacaoRepository} from '../repositories';

export class PublicacaoController {
  constructor(
    @repository(PublicacaoRepository)
    public publicacaoRepository : PublicacaoRepository,
  ) {}

  @post('/publicacaos')
  @response(200, {
    description: 'Publicacao model instance',
    content: {'application/json': {schema: getModelSchemaRef(Publicacao)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Publicacao, {
            title: 'NewPublicacao',
            exclude: ['id'],
          }),
        },
      },
    })
    publicacao: Omit<Publicacao, 'id'>,
  ): Promise<Publicacao> {
    return this.publicacaoRepository.create(publicacao);
  }

  @get('/publicacaos/count')
  @response(200, {
    description: 'Publicacao model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Publicacao) where?: Where<Publicacao>,
  ): Promise<Count> {
    return this.publicacaoRepository.count(where);
  }

  @get('/publicacaos')
  @response(200, {
    description: 'Array of Publicacao model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Publicacao, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Publicacao) filter?: Filter<Publicacao>,
  ): Promise<Publicacao[]> {
    return this.publicacaoRepository.find(filter);
  }

  @patch('/publicacaos')
  @response(200, {
    description: 'Publicacao PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Publicacao, {partial: true}),
        },
      },
    })
    publicacao: Publicacao,
    @param.where(Publicacao) where?: Where<Publicacao>,
  ): Promise<Count> {
    return this.publicacaoRepository.updateAll(publicacao, where);
  }

  @get('/publicacaos/{id}')
  @response(200, {
    description: 'Publicacao model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Publicacao, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Publicacao, {exclude: 'where'}) filter?: FilterExcludingWhere<Publicacao>
  ): Promise<Publicacao> {
    return this.publicacaoRepository.findById(id, filter);
  }

  @patch('/publicacaos/{id}')
  @response(204, {
    description: 'Publicacao PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Publicacao, {partial: true}),
        },
      },
    })
    publicacao: Publicacao,
  ): Promise<void> {
    await this.publicacaoRepository.updateById(id, publicacao);
  }

  @put('/publicacaos/{id}')
  @response(204, {
    description: 'Publicacao PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() publicacao: Publicacao,
  ): Promise<void> {
    await this.publicacaoRepository.replaceById(id, publicacao);
  }

  @del('/publicacaos/{id}')
  @response(204, {
    description: 'Publicacao DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.publicacaoRepository.deleteById(id);
  }
}
